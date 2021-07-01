import Team from "../components/Team";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
  );
  const data = await res.json();

  return {
    props: { teams: data.teams },
  };
};

export default function Home({ teams }) {
  return (
    <section className={styles.container}>
      {teams.map((team) => (
        <Team key={team.idTeam} team={team} />
      ))}
    </section>
  );
}
