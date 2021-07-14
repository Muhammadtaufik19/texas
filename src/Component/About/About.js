import React from "react";
import "./About.css";
import { Button, Card, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="container">
      <div className="content">
        <Fade bottom duration={3000}>
          <h1>WELCOME TO TEXASPOKER.CC</h1>
        </Fade>
        <Fade bottom duration={2000}>
          <p>
            Texaspoker.cc merupakan salah satu situs permainan online terbesar
            di Indonesia yang menyediakan berbagai jenis permainan. Sebagai
            situs poker online terpercaya, kami hadir bagi para penggemar
            permainan kartu online seperti POKER, DOMINO QQ, LIVE DINGDONG,
            TOGEL ONLINE, SPORTSBOOK, LIVE CASINO dan E-GAMES yang dapat
            dimainkan dengan menggunakan satu UserID. Melalui tagline ANTI-BOT,
            Texaspoker.cc menyuguhkan 100% Real Player yang akan memberikan Anda
            keseruan penuh dalam permainan. Texaspoker.cc juga siap melayani
            selama 24 jam dengan menjamin kelancaran permainan, kecepatan
            transaksi, hingga customer service yang responsif demi kepuasan
            Anda. Segeralah bergabung bersama ribuan member lainnya dari
            berbagai kota seperti Jakarta, Medan, Surabaya, Bali, Palembang,
            Bandung, Jayapura dan kota-kota lainnya sekarang juga !{" "}
          </p>
        </Fade>
      </div>
      <div className="mt-5">
        <Fade bottom duration={2000}>
          <h1 className="content ">
            KENAPA HARUS DI SITUS ONLINE TERPERCAYA TEXASPOKER.CC ?
          </h1>
        </Fade>
        <Fade bottom duration={2000}>
          <p className="content">
            Ada beberapa keunggulan yang membuat Situs Online Judi Poker
            Texaspoker.cc menjadi Daftar Situs Poker Indonesia Terpercaya dan
            nomor 1 di Indonesia sehingga menjadi salah satu tempat yang wajib
            bagi para pecinta permainan judi online untuk bermain.
          </p>
        </Fade>
        <div className="keunggulan">
          <Fade bottom duration={1000}>
            <p>Diantaranya Yaitu:</p>
          </Fade>
          <Fade bottom duration={1000}>
            <p>- Sistem pendaftaran yang mudah dan tidak rumit</p>
            <p>
              - Dalam permainan judi online di Texaspoker.cc, kami menjamin 100%
              player vs player. Dan itu berlaku untuk semua permainan yang ada.
              Semua murni tanpa adanya campur tangan robot ataupun admin kami.
            </p>
            <p>
              {" "}
              - Privasi member menjadi prioritas utama kami sebagai situs game
              online yang terpercaya. Kami memberlakukan kebijakan privasi yang
              ketat untuk memastikan data serta informasi pribadi para member
              tetap terjaga.
            </p>
            <p>
              {" "}
              - Privasi member menjadi prioritas utama kami sebagai situs game
              online yang terpercaya. Kami memberlakukan kebijakan privasi yang
              ketat untuk memastikan data serta informasi pribadi para member
              tetap terjaga.
            </p>
            <p>
              - Semua permainan dapat anda akses dengan mudah melalui komputer,
              notebook/laptop, dan smartphone Android maupun IOS.
            </p>
            <p>
              - Situs judi online dengan tingkat kemenangan tertinggi. Untuk
              memastikan transaksi berjalan dengan cepat dan aman
            </p>
            <p>
              {" "}
              - Texaspoker.cc bekerja sama dengan 5 bank lokal terkenal di
              Indonesia seperti: Bank BCA, Bank BNI, Bank Mandiri, Bank BRI dan
              Bank Danamon.
            </p>
          </Fade>
        </div>
        <Fade bottom duration={1000}>
          <p className="content">
            Disini kami telah mendapatkan kepercayaan dan reputasi terbaik dari
            para member Poker Indonesia, Karena kami memberikan pelayanan yang
            maksimal kepada semua member yang bermain di situs kami. Serta
            Berapapun kemenangan yang anda dapatkan akan langsung dibayar oleh
            Situs Online Terbaik Texaspoker.cc , mau itu jackpot atau bonus
            lainnya. Semua permainan yang tersedia dapat anda mainkan hanya
            dengan menggunakan 1 user ID saja, yang bisa anda gunakan setelah
            melakukan pendaftaran akun di Texaspoker.cc.
          </p>
        </Fade>
      </div>
    </div>
  );
}
