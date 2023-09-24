import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
// npm install crypto-js
function Encryption() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(text, password).toString();
    setEncryptedText(encrypted);
    setText('');
    setPassword('');
  };

  const handleDecrypt = () => {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
    setDecryptedText(decrypted);
    setEncryptedText('');
    setPassword('');
  };

  return (
    <div>
      <h2>Encryption Example</h2>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <br />
      <label>
        Encrypted Text:
        <textarea value={encryptedText} readOnly />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button onClick={handleDecrypt}>Decrypt</button>
      <br />
      <label>
        Decrypted Text:
        <textarea value={decryptedText} readOnly />
      </label>
    </div>
  );
}

export default Encryption;
