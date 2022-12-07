import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Actions from "../../components/ActionsCourses";
import CardCourses from "../../components/CardCourses";

const coursesDesign = [
  {
    image:
      "https://www.prepara.com.br/pub/media/catalog/product/cache/458b35c418a9cd381962ecc5b6284104/c/u/curso-designer-grafico-presencial-vertical.png",
    titulo: "curso de design 1",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image: "https://m.media-amazon.com/images/I/81UWPQ7QTvL.jpg",
    titulo: "curso de design 2",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image: "https://img.youtube.com/vi/7CXLw6PA4U4/sddefault.jpg",
    titulo: "curso de design 3",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://portaleducacao.vteximg.com.br/arquivos/ids/158735-1000-1000/Design-Grafico.jpg?v=636592317800930000",
    titulo: "curso de design 4",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://viacarreira.com/wp-content/uploads/2021/01/cursos-gratuitos-de-design-grafico-1.jpg",
    titulo: "curso de design 6",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.unicesumar.edu.br/blog/wp-content/uploads/2018/10/design-de-produto-800x533.jpg",
    titulo: "curso de design 7",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "http://www.polocursos.com.br/wp-content/uploads/2012/08/Design-Grafico-em-Jundia%C3%AD-2-600px.png",
    titulo: "curso de design 8",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.escoladominio.com.br/wp-content/uploads/2016/12/design-grafico-dominio.jpg",
    titulo: "curso de design 9",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://imagens-revista-pro.vivadecora.com.br/uploads/2018/04/curso-tecnico-de-design-de-interiores.jpg",
    titulo: "curso de design 10",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.institutomix.com.br/wp-content/uploads/2020/03/Designer-grafico.jpg",
    titulo: "curso de design 11",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://famesp.com.br/wp-content/uploads/2017/05/curso-tecnico-design-interiores.jpg",
    titulo: "curso de design 12",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
];

const coursesJava = [
  {
    image:
      "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-java_2028.png",
    titulo: "curso de Java 1",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.cursosabeline.com.br/webroot/cur_cache/curso-com-certificado-de-java-na-pratica-1567625985-870-6b2b825e.jpg",
    titulo: "curso de Java 2",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image: "https://i.ytimg.com/vi/sTX0UEplF54/maxresdefault.jpg",
    titulo: "curso de Java 3",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.educamundo.com.br/uploads/courses/20170921162923java.jpg",
    titulo: "curso de Java 4",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.devmedia.com.br/arquivos/Salas/Linguagem/Java/19/2319/thumb.jpg",
    titulo: "curso de Java 6",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://cptstatic.s3.amazonaws.com/imagens/produtos/500px/45663/programacao-java-01.jpg",
    titulo: "curso de Java 7",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://1.bp.blogspot.com/-iGcngsQpp_U/X-kDS0OTcPI/AAAAAAAAccg/UTu5XcZJ_YIWaxd1LLMEs6PWINKaIQtpQCLcBGAsYHQ/s700/POST_MAT.jpg",
    titulo: "curso de Java 8",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/104003/curso_online_de_programacao_em_java_com_certificado_3133_1_20200319152642.jpg",
    titulo: "curso de Java 9",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image: "https://img.ibxk.com.br/2022/10/03/03194437073399.jpg",
    titulo: "curso de Java 10",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
];

const coursesMarketing = [
  {
    image: "https://encceja2022.inf.br/wp-content/uploads/2022/08/des-7.jpg",
    titulo: "curso de Marketing 1",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://www.primecursos.com.br/arquivos/uploads/2018/08/marketing-digital.jpg",
    titulo: "curso de Marketing 2",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://certificadocursosonline.com/wp-content/uploads/2019/07/Capa-do-curso-de-marketing-digital.jpg",
    titulo: "curso de Marketing 3",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://inteligenciaetecnologia.com.br/wp-content/uploads/2020/10/marketingdigital-online.jpg",
    titulo: "curso de Marketing 4",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://images.educamaisbrasil.com.br/content/noticias/aprenda-marketing-digital-com-o-google_g.jpg",
    titulo: "curso de Marketing 6",
    plataforma: "Coursera",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://clubedevagas.com/wp-content/uploads/2022/08/Curso-de-Marketing-Digital.jpg",
    titulo: "curso de Marketing 7",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image: "https://i.ytimg.com/vi/9o9DlyWs-eQ/maxresdefault.jpg",
    titulo: "curso de Marketing 8",
    plataforma: "Alura",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://witu.digital/wp-content/uploads/2020/04/curso-marketing-digital-witu.png",
    titulo: "curso de Marketing 9",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
  {
    image:
      "https://sites.pucgoias.edu.br/extensao/cursosdeextensao/wp-content/uploads/sites/5/2017/02/Curso-Marketing-Digital-para-PME.jpg",
    titulo: "curso de Marketing 10",
    plataforma: "Udemy",
    resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
  },
];

let listCourses = coursesDesign;
let changedData = 0;

function refreshList(courses) {
  listCourses = courses;
  changedData += changedData;
}

export default function Courses() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => refreshList(coursesDesign)}
        >
          <View style={styles.areaButton}>
            <Text style={styles.labelButton}>Design</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => refreshList(coursesJava)}
        >
          <View style={styles.areaButton}>
            <Text style={styles.labelButton}>Java</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => refreshList(coursesMarketing)}
        >
          <View style={styles.areaButton}>
            <Text style={styles.labelButton}>Marketing</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
        style={styles.list}
        data={listCourses}
        extraData={changedData}
        keyExtractor={(item) => String(item.titulo)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardCourses data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 12,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 40,
    width: 130,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    textAlign: "center",
    fontWeight: "bold",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
