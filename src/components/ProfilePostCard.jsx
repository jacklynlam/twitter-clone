import { useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';


export default function ProfilePostCard({ content, postId }) {
    const [likes, setLikes] = useState(0);
    const pic = "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

    useEffect(() => {
        fetch(
            `https://6303c542-cc60-4abc-bcac-c3e58f739953-00-a0kzw3lwsgrh.janeway.replit.dev/likes/post/${postId}`
        )
        .then((response) => response.json())
        .then((data) => setLikes(data.length))
        .catch((error) => console.error("Error:", error))
    }, [postId]);
    return (
        <Row
            className="p-3"
            style={{
                borderTop: "1px solid #D3D3D3",
                borderBottom: "1px solid #D3D3D3"
            }}
        >
            <Col sm={1}>
                <Image src={pic} fluid roundedCircle />
            </Col>

            <Col>
                <strong>Jacklyn</strong>
                <span>@jacklyn Mar 13</span>
                <p>{content}</p>
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-heart"> {likes} </i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-graph-up"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-upload"></i>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}