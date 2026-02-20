import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import icon from './assets/threads_ig.png';
import icon2 from './assets/foto_perfil.png';
import icon3 from './assets/siguen_esta_cuenta.png';
import icon4 from './assets/publicaciones.png';
import icon5 from './assets/historia_insta.png';

const App = () => {

  const [seguidores, setSeguidores] = useState(275);
  const [seguidos, setSeguidos] = useState(345);
  const [siguiendo, setSiguiendo] = useState(false);
  const [publicaciones, setPublicaciones] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHistoria, setModalHistoria] = useState(false);

  const [verHistoria, setVerHistoria] = useState(false);
  const [visualizaciones, setVisualizaciones] = useState(0);

  const handleFollow = () => {
    if (siguiendo) {
      setSeguidores(seguidores > 0 ? seguidores - 1 : 0);
    } else {
      setSeguidores(seguidores + 1);
    }
    setSiguiendo(!siguiendo);
  };

  const handleVerHistoria = () => {
    setVerHistoria(true);
    setVisualizaciones(visualizaciones + 1);
    setModalHistoria(true);
  };

  return (

    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Ionicons name={"chevron-back"} size={28} color={"#EFF3F5"} style={styles.addIcon}></Ionicons>
        <Text style={styles.textNombreUsuario}>isaac_cisneross</Text>
        <Ionicons name={"notifications-outline"} size={25} color={"#EFF3F5"} style={styles.notificationsIcon}></Ionicons>
        <Ionicons name={"ellipsis-horizontal"} size={20} color={"#EFF3F5"} style={styles.ellipsisIcon}></Ionicons>
      </View>

      <View style={styles.seccionPerfil}>
        <View style={styles.filaPerfil}>


          <View style={styles.perfilHistoriaContainer}>
            <Image source={icon2} style={styles.imageFotoPerfil} />
            <TouchableOpacity style={[styles.btnHistoria, verHistoria && styles.btnHistoriaVisualizada]} onPress={handleVerHistoria}>
              <Text style={styles.textBoton}>
                {verHistoria ? "Historia Vista" : "Ver Historia"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoDerechaContainer}>
            <Text style={styles.textNombre}>Isaac Cisneros</Text>

            <View style={styles.estadisticasContainer}>
              <View style={styles.pssContainer}>
                <Text style={styles.statNumber}>{publicaciones}</Text>
                <Text style={styles.textInfo}>publicaciones</Text>
              </View>

              <View style={styles.pssContainer}>
                <Text style={styles.statNumber}>{seguidores}</Text>
                <Text style={styles.textInfo}>seguidores</Text>
              </View>

              <View style={styles.pssContainer}>
                <Text style={styles.statNumber}>{seguidos}</Text>
                <Text style={styles.textInfo}>seguidos</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.textBio}>Soy Isaac Cisneros me gusta la programación, la música y los deportes.</Text>

        <View style={styles.filaPerfilThreads}>
          <Image source={icon} style={styles.imageThreads} />
          <Text style={styles.textThreads}>isaac_cisneross</Text>
        </View>

        <Image source={icon3} style={styles.imageSEC} />
      </View>

      <View style={styles.seccionBotones}>
        <TouchableOpacity style={[styles.btnSeguir, siguiendo && styles.btnSiguiendo]} onPress={handleFollow}>
          <Text style={styles.textBoton}>
            {siguiendo ? "Siguiendo" : "Seguir"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnMensaje}>
          <Text style={styles.textBoton}>Mensaje</Text>
        </TouchableOpacity>

      </View>

      <Image source={icon4} style={styles.imagePublicaciones} />


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalHistoria}
        onRequestClose={() => setModalHistoria(false)}
      >

        <View style={styles.modalHistoriaContainer}>

          <Image source={icon5} style={styles.imagenFondoHistoria} />

          <View style={styles.headerHistoria}>
            <View style={styles.perfilHistoriaInfo}>
              <Image source={icon2} style={styles.imageFotoPerfilHistoria} />
              <Text style={styles.modalHistoriaText}>isaac_cisneross</Text>
              <Ionicons name="eye" style={styles.iconoVisualizaciones} size={24} color="#FFF" />
              <Text style={styles.textoVisualizaciones}>{visualizaciones}</Text>
            </View>

            <TouchableOpacity onPress={() => setModalHistoria(false)}>
              <Ionicons name="close" size={32} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.textoHistoriaContainer}>
            <Text style={styles.textoHistoria}> TQM Bad Bunny</Text>
            <Text style={styles.textoHistoria}> ¡Qué concierto!</Text>
          </View>

        </View>

      </Modal>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1014',
    paddingTop: 70,
  },
  headerContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 25,
  },
  notificationsIcon: {
    marginLeft: 100,
  },
  ellipsisIcon: {
    marginTop: 3,
    marginLeft: 25,
  },
  textNombreUsuario: {
    color: '#EFF3F5',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 4,
  },
  imageThreads: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginLeft: 0,
    marginTop: 10,
  },
  infoPerfil: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 8,
  },
  imageFotoPerfil: {
    width: 80,
    height: 80,
    marginLeft: -8,
    borderRadius: 50,
  },
  perfilHistoriaContainer: {
    alignItems: 'center',
    marginLeft: -8,
  },
  textBoton: {
    color: '#EFF3F5',
    fontSize: 6,
    fontWeight: 'bold',
  },
  btnHistoria: {
    backgroundColor: '#445CFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 6,
  },
  btnHistoriaVisualizada: {
    flex: 1,
    backgroundColor: '#363636',
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seccionPerfil: {
    paddingHorizontal: 15,
  },
  filaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoDerechaContainer: {
    flex: 1,
    marginTop: 8,
  },
  estadisticasContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  pssContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  textNombre: {
    color: '#EFF3F5',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  statNumber: {
    color: '#EFF3F5',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textInfo: {
    color: '#EFF3F5',
    fontSize: 14,
    marginLeft: 10,
  },
  bioContainer: {
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  textBio: {
    color: '#EFF3F5',
    fontSize: 14,
  },
  filaPerfilThreads: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textThreads: {
    color: '#EFF3F5',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: 8,
  },
  imageSEC: {
    width: 400,
    height: 60,
    borderRadius: 10,
    marginLeft: -20,
    marginTop: 5,
  },
  seccionSeguirMensajes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textSeguir: {
    color: '#EFF3F5',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: 8,
  },
  textMensajes: {
    color: '#EFF3F5',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: 8,
  },
  imagePublicaciones: {
    width: 400,
    height: 500,
    marginTop: 10,
  },
  seccionBotones: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
    gap: 8,
  },
  btnSeguir: {
    flex: 1,
    backgroundColor: '#445CFF',
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMensaje: {
    flex: 1,
    backgroundColor: '#363636',
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSiguiendo: {
    backgroundColor: '#363636',
  },
  btnIcono: {
    backgroundColor: '#262626',
    width: 35,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoton: {
    color: '#EFF3F5',
    fontWeight: '600',
    fontSize: 14,
  },
  modalHistoriaContainer: {
    flex: 1,
    backgroundColor: '#0B1014',
  },
  imagenFondoHistoria: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerHistoria: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  perfilHistoriaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageFotoPerfilHistoria: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalHistoriaText: {
    color: '#EFF3F5',
    fontWeight: 'bold',
    fontSize: 14,
  },
  iconoVisualizaciones: {
    marginLeft: 6,
  },
  textoVisualizaciones: {
    color: '#EFF3F5',
    fontSize: 14,
    fontWeight: '600',
  },
  textoHistoriaContainer: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  textoHistoria: {
    color: '#EFF3F5',
    fontSize: 18,
    fontWeight: '600',
  },
});
