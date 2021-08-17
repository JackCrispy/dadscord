import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

import data from "@public/meta.json";

export const InviteCard: React.FC = () => {
    return (<div className="di grow"><h5 className="di-title">You've been invited to join a server</h5><div className="di-content di-flex">
        <div className="di-icon"></div>
        <div className="di-details di-flex"><div className="di-d-name">Daddy</div><div className="di-d-details">
            <i className="di-d-d-online"></i><span id="userCount3">37,449 Online</span>
            <i className="di-d-d-offline"></i><span id="userCount2">294,596 Members</span></div></div><div className="di-break"></div>
        <a href="https://discord.gg/daddy" target="_blank" rel="noopener noreferrer" type="button" className="di-button">Join</a>
    </div></div>);
};
