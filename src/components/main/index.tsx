import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import { Button, InviteCard } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <div id="tsparticles"></div>
      <Container>
        <h1 className="display-2 text-white">Dadscord</h1>
        <p className="lead text-white">
        Discord’s Most Active Server.
        </p>
        <InviteCard></InviteCard>
      </Container>
      test
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.33.3/tsparticles.min.js" integrity="sha512-IacIaC8mVlD3mEZjwEkd9p9mWlVpWa2deOIsS2ZL2HtP7cpXbPYlJX6g53gaXVlZrlHhMcjkdVopjua8yJ7zkg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </div>
  );
};
