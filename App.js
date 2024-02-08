import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jao</Text>
      <Text style={styles.content}>
  Como um entusiasta fervoroso da biologia, mergulho de cabeça no vasto oceano do conhecimento científico, onde cada molécula, célula e organismo conta uma história fascinante. Para mim, a programação é mais do que apenas linhas de código; é uma ferramenta poderosa para explorar os mistérios da vida e desvendar os segredos da natureza.
</Text>
<Text style={styles.content}>
  Assim como os ecossistemas complexos que estudamos, a estruturação elegante do código reflete a beleza e harmonia encontrada na natureza. Através de um estilo meticuloso e organizado, posso expressar minha paixão pela biologia, criando soluções inovadoras que ecoam a complexidade e diversidade do mundo natural.
</Text>
<Text style={styles.content}>
  Da mesma forma que os processos biológicos são interconectados e interdependentes, reconheço a importância de uma abordagem holística na programação. Estilos bem aplicados não apenas aprimoram a estética do código, mas também promovem a coesão, facilitando a compreensão e manutenção ao longo do tempo.
</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
});
