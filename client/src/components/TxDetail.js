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
  const [txDetail, setTxDetail] = useState({});
  const [hash, setHash] = useState("");

  useEffect(() => {
    const getTxDetail = async () => {
      setHash((window.location.pathname.split("/"))[2])
      axios
        .get(`http://localhost:4000/tx/${hash}`)
        .then((res) => {
          setTxDetail(res.data.data);
        });
      return txDetail;
    };
    getTxDetail();
  }, [hash]);

  return (
    <Row className="bkdetail">
      <Col lg="12">
        <div>
          <ListGroup>
            <CardBody>
              <CardTitle tag="h5">Tx Detail</CardTitle>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <tbody>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        hash
                      </div>
                    </td>
                    <td>{txDetail.tx_hash}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        blockNumber
                      </div>
                    </td>
                    <td>{txDetail.blockNumber}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        gas
                      </div>
                    </td>
                    <td>{txDetail.gas}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        gas_price
                      </div>
                    </td>
                    <td>{txDetail.gas_price}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        from
                      </div>
                    </td>
                    <td>{txDetail.from}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        to
                      </div>
                    </td>
                    <td>{txDetail.to}</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="ms-3">
                        value
                      </div>
                    </td>
                    <td>{txDetail.value}</td>
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