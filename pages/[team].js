export const getStaticPaths = async () => {
  const res = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
  );
  const data = await res.json();

  const paths = data.teams.map((team) => {
    return {
      params: { team: team.idTeam },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.team;

  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
  );
  const data = await res.json();

  return {
    props: { team: data.teams },
  };
};

import React from "react";

const teamDetails = ({ team }) => {
  console.log("team", team);
  return (
    <div style={{ padding: "20px" }}>
      <h1>{team[0].strTeam}</h1>
      <h3>{team[0].strAlternate}</h3>
      <h3>{team[0].strSport}</h3>
      <h3>{team[0].strLeague}</h3>
      <h3>{team[0].strStadium}</h3>
    </div>
  );
};

export default teamDetails;
