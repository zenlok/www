import { x25519 } from "@arcium-hq/client";

export async function clampPrivateKey(raw: Uint8Array): Promise<Uint8Array> {
  if (raw.length !== 32) {
    throw new Error("Raw key must be exactly 32 bytes");
  }
  const clamped = Uint8Array.from(raw);
  clamped[0] &= 248; // Clear lowest 3 bits
  clamped[31] &= 127; // Clear highest bit
  clamped[31] |= 64; // Set second-highest bit
  return clamped;
}

export async function deriveX25519FromSignature(
  signature: Uint8Array<ArrayBufferLike>,
  nonce: number,
) {
  if (signature.length !== 64) {
    throw new Error("Signature must be 64 bytes");
  }

  // Convert nonce to 8-byte little-endian buffer
  const nonceBuffer = new Uint8Array(8);
  new DataView(nonceBuffer.buffer).setUint32(0, nonce, true);

  // Concatenate signature and nonce
  const input = new Uint8Array(signature.length + nonceBuffer.length);
  input.set(signature, 0);
  input.set(nonceBuffer, signature.length);

  // Hash to get 32-byte seed
  const hashBuffer = await crypto.subtle.digest("SHA-256", input);
  const hash = new Uint8Array(hashBuffer);

  // Clamp to form valid X25519 private key
  const privateBytes = await clampPrivateKey(hash);

  // Compute public key
  const publicBytes = x25519.getPublicKey(privateBytes);

  return {
    privateKey: privateBytes,
    publicKey: publicBytes,
  };
}
