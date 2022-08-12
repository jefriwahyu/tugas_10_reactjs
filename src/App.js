import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Flag,
  Icon,
  Image,
  Grid,
  Label,
  Form,
  Divider,
  Button,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Container>
        <Form style={{ margin: "0 -25px 0 80px" }}>
          <Grid columns={5}>
            <Grid.Column width={1}>
              {" "}
              <Flag name="id" />
            </Grid.Column>
            <Grid.Column width={1}>
              {" "}
              <Icon name="angle left" size="large"/>
            </Grid.Column>
            <Grid.Column width={1}>
              {" "}
              <Icon name="angle right" size="large"/>
            </Grid.Column>

            <Form.Input
              style={{ marginTop: "15px" }}
              width={10}
              type="text"
              placeholder="Search..."
              icon={<Icon name="star" />}
            />

            <Grid.Column style={{ marginLeft: "-15px" }}>
              {" "}
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <span>Patrick</span>
            </Grid.Column>
          </Grid>
        </Form>
      </Container>
      <Divider horizontal>SELAMAT DATANG !!!!</Divider>
      <Container>
        <Grid style={{ marginRight: "120px" }}>
          <Grid.Row>
            <Grid.Column>
              <p />
            </Grid.Column>
            <Grid.Column floated="right">
              <Label as="a" color="teal" tag>
                SPORT
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <div style={{ margin: "0 80px 0 80px" }}>
          <p style={{ textAlign: "center" }}>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang
            komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah
            Ducati akan melanjutkan ke CAS(Pengadilan Arbitrase
            Olahraga)?Suzuki,Honda,KTM, dan Aprilia memprotes penggunaan
            komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo
            Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap
            ilegal.Pada prosesnya,Davizioso tampil sebagai pemenang usai
            mengalahkan Marc Marques. Keempat tim menyakini,komponen itu
            memiliki fungsi aerodinamis, dan menghasilkan downforce,yang
            membantu motor melesat di trek.Sementara Ducati bersikukuh komponen
            itu cuma untuk mendinginkan ban dan sudah disetujui Technical
            Director sebelum balapan. Pada awalnya, protes keempat tim itu
            ditolak oleh steward di MotoGP sehingga dibawa ke Pengadilan Banding
            FIM.Sidang itu sendiri akan dilakukan sebelum seri kedua di
            Argentina digelar pada 29-31 Maret mendatang.Manajer umum Ducati
            Gigi Dall'Igna berkukuh tidak ada yang ilegal di komponen itu.Namun,
            seandainya pengadilan mengabulkan gugatan tersebut Ducati akan
            mempertimbangkan melanjutkan kasus ini ke CAS."Di dalam
            federasi,derajatnya berakhir di Pengadilan Banding FIM. Anda harus
            pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus
            ini Anda keluar dari parimeter FIM,"Dall'Igna mengungkapkan kepada
            MotoGP.com."Saya bahkan tidak ingin memikirkan sampai titik ini.Kami
            sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami
            tidak melihat adanya alasan mengapa pengadilan banding bisa
            memutuskan secara berbeda."
          </p>
        </div>
        <br />
        <div style={{textAlign: 'center'}}>
          <Button
            color="teal"
            content="Tambah Tautan Ke List"
            icon="add"
            labelPosition="left"
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
