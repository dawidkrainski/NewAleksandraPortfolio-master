import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Description from "../../components/small/Description/Description";
import ImgComp from "../../components/small/ImgComp/ImgComp";
import Text from "../../components/small/Text/Text";
import Title from "../../components/small/Title/Title";
import themes from "../../theme/theme";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: theme.spacing(5, 0),
  },
  itemGrid: {
    paddingTop: theme.spacing(3),
  },
  gridSkills: {
    backgroundColor: themes.palette.bgc,
    paddingBottom: theme.spacing(4),
    boxShadow: "450px 0 0 #212026, -450px 0 0 #212026",
  },
}));

const content = [
  {
    name: "Wiek",
    nameEng: "Age",
    answer: "26",
  },
  {
    name: "Adres",
    nameEng: "Address",
    answer: "Grudziądz, Poland",
  },
  {
    name: "Telefon",
    nameEng: "Phone",
    answer: "502658212",
  },
  {
    name: "E-mail",
    nameEng: "E-mail",
    answer: "dawid.krainski@gmail.com",
  },
  {
    name: "Dane kontaktowe nie są do Justyny tylko do twórcy projektu ze względów na RODO",
    nameEng: "Graduate of the Academy of Fine Arts in Gdańsk",
  },
];
const skills = [
  "../../img/1.png",
  "../../img/2.png",
  "../../img/3.png",
  "../../img/4.png",
  "../../img/5.png",
];

const About = () => {
  const ln = useSelector(state => state.languageReducer)
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Title style={{ margin: 0 }}>{ln.about.name}</Title>
      <Text variant="h5" style={{ color: themes.palette.red }} align="center">
        {ln.about.position}
      </Text>
      <Grid container justify="space-around" className={classes.mainGrid}>
        <Grid item xs={6} md={3}>
          <ImgComp src="../../img/profiloweS.png" />
        </Grid>
        <Grid item xs={12} md={8} className={classes.itemGrid}>
          <Description>{ln.about.description}</Description>

          {content.map((item, index) => (
            <Text key={index} style={{ lineHeight: "2rem" }}>
              {ln.language === "pl" ? item.name : item.nameEng}
              {item.answer && `: ${item.answer}`}
            </Text>
          ))}
        </Grid>
      </Grid>
      <Grid container justify="space-around" className={classes.gridSkills}>
        <Grid item xs={12} md={12}>
          <Title style={{ color: "white" }}>{ln.about.skills}</Title>
        </Grid>

        {skills.map((item, index) => (
          <Grid item xs={2} md={2} key={index}>
            <ImgComp src={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
