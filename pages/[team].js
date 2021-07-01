export const getStaticPaths = async () => {
  const res = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
  );
  const data = await res.json();

  const paths = data.teams.map((team) => {
    console.log(typeof team.idTeam);
    return {
      params: { id: team.idTeam.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

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
  console.log(team);
  return (
    <div>
      <h1>{team.strTeam}</h1>
      <h3>{team.strAlternate}</h3>
      <h3>{team.strSport}</h3>
      <h3>{team.strLeague}</h3>
      <h3>{team.strStadium}</h3>
    </div>
  );
};

export default teamDetails;
