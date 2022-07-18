import {
  Row,
  Col,
  Table,
  ListGroup,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  ListGroupItem,
  FormGroup,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [blockDetail, setBlockDetail] = useState({});
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const getBlockDetail = async () => {
      setHeight((window.location.pathname.split("/"))[2]);
      const blockDetail = await axios
        .get(`http://localhost:4000/block/${height}`)
        .then((res) => {
          setBlockDetail(res.data.data);
        });
      return blockDetail;
    };
    getBlockDetail();
  }, [height]);

  return (
    <Row className="bkdetail">
      <Col lg="12">
        <div>
          <ListGroup>
            <CardBody>
              <CardTitle tag="h5">Block Detail</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <tbody>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        height
                      </div>
                    </td>
                    <td>{blockDetail.height}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        transactions
                      </div>
                    </td>
                    <td>{blockDetail.transactions}개</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        miner
                      </div>
                    </td>
                    <td>{blockDetail.miner}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        difficulty
                      </div>
                    </td>
                    <td>{blockDetail.difficulty}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        totalDifficulty
                      </div>
                    </td>
                    <td>{blockDetail.totalDifficulty}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        size
                      </div>
                    </td>
                    <td>{blockDetail.size}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        gas_limit
                      </div>
                    </td>
                    <td>{blockDetail.gas_limit}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        gas_used
                      </div>
                    </td>
                    <td>{blockDetail.gas_used}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        hash
                      </div>
                    </td>
                    <td>{blockDetail.hash}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        parent_hash
                      </div>
                    </td>
                    <td>{blockDetail.parent_hash}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </ListGroup>
        </div>
      </Col>
    </Row >
  )
};

export default Tables;