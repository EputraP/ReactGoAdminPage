import React, { useState } from "react";
import Splitter from "m-react-splitters";
import styled from "styled-components";
import { RadioButton, UploadWidget } from "../../components";
import { Button, Form, Input, InputNumber } from "antd";
import { ListItems } from "../Items";
import axios from "axios";
import "./Items.css";

interface Props {
  screenName?: string | undefined;
}

const SplitterContainer = styled.div`
  margin: 10px;
`;
const RadioButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
`;
const FormContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: green;
`;
const FormContainerInner = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: -20px;

  // justify-content: center;
`;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const data = [
  {
    key: "1",
    name: "Anton Breton",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "2",
    name: "Cervini",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "3",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "4",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "5",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "6",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "7",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
  {
    key: "8",
    name: "Cremona",

    created: "20/06/2023",
    updated: "20/06/2023",
  },
];

const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Code",
    dataIndex: "code",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Availability",
    dataIndex: "availability",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Created",
    dataIndex: "created",
    sorter: (a: any, b: any) => a.created.length - b.created.length,
  },
  {
    title: "Updated",
    dataIndex: "updated",
    sorter: (a: any, b: any) => a.updated.length - b.updated.length,
  },
];

const GetFileImage = async () => {
  return await axios
    .get("http://localhost:4352/image")
    .then(({ data }) => {
      return data;
    })
    .catch((e) => console.log(e.response.status));
};

const Product = (props: Props) => {
  const { screenName } = props;
  const [RadioValue, setRadioValue] = useState("Create");
  const [CreUptButtonFlag, setCreUptButtonFlag] = useState(false);
  const [fileData, setFileData] = useState();

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  GetFileImage().then((data) => {
    // console.log(JSON.parse(data));
    console.log(typeof data);
    setFileData(data);
  });

  return (
    <Splitter
      position="vertical"
      primaryPaneMaxWidth="100%"
      primaryPaneMinWidth={600}
      primaryPaneWidth="70%"
      postPoned={false}
    >
      <SplitterContainer>
        <ListItems
          screenName={screenName}
          funcSplitterTrigger={() => {
            setCreUptButtonFlag(!CreUptButtonFlag);
          }}
          data={data}
          columns={columns}
        />
        <div>
          <img src={fileData} alt="Red dot" />
        </div>
      </SplitterContainer>
      {CreUptButtonFlag && (
        <SplitterContainer>
          <RadioButtonContainer>
            <RadioButton
              data={[
                { label: "Create", value: "Create" },
                { label: "Update", value: "Update" },
              ]}
              change={radioButtonOnChange}
              selectedValue={RadioValue}
              optionType={true}
            />
          </RadioButtonContainer>
          <FormContainer>
            {RadioValue == "Create" && (
              <FormContainerInner
                {...layout}
                name="nest-messages"
                // onFinish={onFinish}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Code"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Price"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Availability"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <div>
                    <UploadWidget />
                    <form
                      encType="multipart/form-data"
                      action="http://localhost:8080/upload"
                      method="post"
                    >
                      <input type="file" name="myFile" />
                      <input type="submit" value="upload" />
                    </form>
                  </div>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Create
                  </Button>
                </Form.Item>
              </FormContainerInner>
            )}
            {RadioValue != "Create" && (
              <FormContainerInner
                {...layout}
                name="nest-messages"
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Code"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Price"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Availability"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </FormContainerInner>
            )}
          </FormContainer>
        </SplitterContainer>
      )}
    </Splitter>
  );
};

export default Product;
