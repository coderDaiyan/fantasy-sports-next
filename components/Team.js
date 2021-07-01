import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Team.module.css";

const Team = (props) => {
  const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
  return (
    <div className={styles.team}>
      <Image
        className={styles.team_badge}
        src={strTeamBadge}
        alt="Team Badge"
        width={160}
        height={160}
      />
      <h3>Name: {strTeam}</h3>
      <h5>Sport Type: {strSport}</h5> <br />
      <button className={styles.explore_btn}>
        <Link style={{ marginTop: "10px !important" }} href={`/${idTeam}`}>
          <a
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Explore
            <FontAwesomeIcon
              style={{ marginLeft: "10px" }}
              icon={faArrowRight}
            />
          </a>
        </Link>
      </button>
    </div>
  );
};

export default Team;
