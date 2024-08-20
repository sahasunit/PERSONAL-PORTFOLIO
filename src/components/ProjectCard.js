import { Col, Row, Image } from 'react-bootstrap';

export const ProjectCard = ({company, position, workingPeriod, imgUrl1, imgUrl2, descriptions}) => {

  return (
        <Row className="align-items-center">
            <Col xs={12} md={8} className="workChip">
                <div>
                    <h1>{company}</h1>
                    <h2>{position}</h2>
                    <h2 className='mb-4'>{workingPeriod}</h2>
                    <div className='workCardAlignment'>
                        {
                            descriptions.map((description) => {
                                return (
                                    <p>{description}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4} >
                <div className="mt-4">
                    <Image className="item" src={imgUrl1} alt={company} rounded />
                </div>
            </Col>
        </Row>
  );
}
