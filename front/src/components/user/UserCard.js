import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
function UserCard({
  user,
  imageSrc,
  setImageSrc,
  setIsEditing,
  isEditable,
  isNetwork,
  portfolioOwnerId,
  key,
}) {
  const navigate = useNavigate();

  return (
    <Card className="mb-2 ms-3" style={{ width: "21rem", padding: "0px" }}>
      <Card.Body>
        <Row className="justify-content-md-center">
          <Card.Img
            style={{ width: "13rem", height: "9rem" }}
            className="mb-3"
            src={imageSrc}
            alt="프로필 사진"
          />
        </Row>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>

        {isEditable && (
          <Col>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Col>
        )}

        {isNetwork && (
          <Card.Link
            className="mt-3"
            href="#"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            포트폴리오
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
