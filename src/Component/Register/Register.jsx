import React from "react";
import "./Register.css";
import { Button, Card, Container, Form, option } from "react-bootstrap";

export default function Register() {
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
                  type="text"
                  placeholder="Username minimal 3 karakter"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formKataSandi">
                <Form.Label>KATA SANDI</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minilal 6 huruf dan angka"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formKonfirSandi">
                <Form.Label>KONFIRMASI KATA SANDI</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minilal 6 huruf dan angka"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pilih pertanyaan keamanan</Form.Label>
                <br />
                <select
                  aria-label="Default select example "
                  className="abu-abu"
                >
                  <option>Pilih</option>
                  <option value="1">Nama ibu kandung?</option>
                  <option value="2">Nama ayah kandung</option>
                  <option value="3">Klub bola favorit anda</option>
                </select>
              </Form.Group>
              <Form.Group>
                <Form.Label>JAWABAN KEAMANAN</Form.Label>
                <Form.Control
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
                <Form.Control type="number" placeholder="No telepon" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Email@exampel.com" />
              </Form.Group>

              <Form.Group>
                <Form.Label>BANK</Form.Label>
                <br />
                <select className="abu-abu" aria-label="Default select example">
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
                <Form.Control type="text" placeholder="Nama pemilik bank" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNorekBank">
                <Form.Label>NOMOR REKENING BANK</Form.Label>
                <Form.Control type="number" placeholder="Nomer rekening bank" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formReveral">
                <Form.Label>REFERRAL </Form.Label>
                <Form.Control type="text" placeholder="Referal" />
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
}
