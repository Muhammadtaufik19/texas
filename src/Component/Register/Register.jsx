import React, { useState } from "react";
import "./Register.css";

import { Button, Card, Container, Form, option } from "react-bootstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [katasandi, setKatasnadi] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [telepon, setTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [pemilik, setPemilik] = useState("");
  const [norek, setNorek] = useState("");
  const [referral, setReferrar] = useState("");
  const [pertanyaan, setPertanyaan] = useState("");
  const [bank, setBank] = useState("");

  const handlePertanyaan = (e) => {
    setPertanyaan(e.target.value);
  };
  const handleBank = (e) => {
    setBank(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleKataSandi = (e) => {
    setKatasnadi(e.target.value);
  };
  const handleKonfirmasi = (e) => {
    setKonfirmasi(e.target.value);
  };
  const handleTelepon = (e) => {
    setTelepon(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePemilik = (e) => {
    setPemilik(e.target.value);
  };
  const handleNorek = (e) => {
    setNorek(e.target.value);
  };
  const handleReferral = (e) => {
    setReferrar(e.target.value);
  };

  console.log(username);

  return (
    <div className="bg-register">
      <div className="container">
        <h5>PENDAFTARAN</h5>
        <div className="row">
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>USERNAME</Form.Label>
                <Form.Control
                  onChange={handleUsername}
                  type="text"
                  placeholder="Username minimal 3 karakter"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formKataSandi">
                <Form.Label>KATA SANDI</Form.Label>
                <Form.Control
                  onChange={handleKataSandi}
                  type="password"
                  placeholder="Minilal 6 huruf dan angka"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formKonfirSandi">
                <Form.Label>KONFIRMASI KATA SANDI</Form.Label>
                <Form.Control
                  onChange={handleKonfirmasi}
                  type="password"
                  placeholder="Minilal 6 huruf dan angka"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pilih pertanyaan keamanan</Form.Label>
                <br />
                <select
                  // onChange={handlePertanyaan}
                  aria-label="Default select example "
                  className="abu-abu"
                >
                  <option>Pilih</option>
                  <option value="Nama ibu kandung">Nama ibu kandung?</option>
                  <option value="Nama ayah kandung">Nama ayah kandung</option>
                  <option value="Klub bola favorit anda">
                    Klub bola favorit anda
                  </option>
                </select>
              </Form.Group>
              <Form.Group>
                <Form.Label>JAWABAN KEAMANAN</Form.Label>
                <Form.Control
                  onChange={handlePertanyaan}
                  type="text"
                  placeholder="Jawab pertanyaan keamanan"
                />
              </Form.Group>
            </Form>
          </div>

          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formTelepon">
                <Form.Label>TELEPON</Form.Label>
                <Form.Control
                  onChange={handleTelepon}
                  type="number"
                  placeholder="No telepon"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                  onChange={handleEmail}
                  type="email"
                  placeholder="Email@exampel.com"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>BANK</Form.Label>
                <br />
                <select
                  onChange={handleBank}
                  className="abu-abu"
                  aria-label="Default select example"
                >
                  <option>Pilih layanan Bank</option>
                  <option value="BCA">BCA</option>
                  <option value="BRI">BRI</option>
                  <option value="BNI">BNI</option>
                  <option value="DANAMON">DANAMON</option>
                  <option value="MANDIRI">MANDIRI</option>
                </select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNamaPemilikBank">
                <Form.Label>NAMA PEMILIK REKENING</Form.Label>
                <Form.Control
                  onChange={handlePemilik}
                  type="text"
                  placeholder="Nama pemilik bank"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNorekBank">
                <Form.Label>NOMOR REKENING BANK</Form.Label>
                <Form.Control
                  onChange={handleNorek}
                  type="number"
                  placeholder="Nomer rekening bank"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formReveral">
                <Form.Label>REFERRAL </Form.Label>
                <Form.Control
                  onChange={handleReferral}
                  type="text"
                  placeholder="Referal"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
