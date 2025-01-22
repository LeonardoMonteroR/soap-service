// service.js
const myService = {
  MyService: {
    MyPort: {
      sayHello: function (args) {
        return { greeting: `Hello, ${args.name}!` };
      },
      addNumbers: function (args) {
        const result = parseFloat(args.num1) + parseFloat(args.num2);
        return { result };
      },
    },
  },
};

const xml = `
  <definitions name="MyService" xmlns="http://schemas.xmlsoap.org/wsdl/" 
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" 
    xmlns:tns="http://example.com/soap" 
    targetNamespace="http://example.com/soap">
    <types>
      <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
        targetNamespace="http://example.com/soap">
        <xsd:element name="sayHello">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="name" type="xsd:string" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="sayHelloResponse">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="greeting" type="xsd:string" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="addNumbers">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="num1" type="xsd:float" />
              <xsd:element name="num2" type="xsd:float" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="addNumbersResponse">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="result" type="xsd:float" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:schema>
    </types>
    <message name="sayHelloRequest">
      <part name="parameters" element="tns:sayHello" />
    </message>
    <message name="sayHelloResponse">
      <part name="parameters" element="tns:sayHelloResponse" />
    </message>
    <message name="addNumbersRequest">
      <part name="parameters" element="tns:addNumbers" />
    </message>
    <message name="addNumbersResponse">
      <part name="parameters" element="tns:addNumbersResponse" />
    </message>
    <portType name="MyPortType">
      <operation name="sayHello">
        <input message="tns:sayHelloRequest" />
        <output message="tns:sayHelloResponse" />
      </operation>
      <operation name="addNumbers">
        <input message="tns:addNumbersRequest" />
        <output message="tns:addNumbersResponse" />
      </operation>
    </portType>
    <binding name="MyBinding" type="tns:MyPortType">
      <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http" />
      <operation name="sayHello">
        <soap:operation soapAction="http://example.com/sayHello" />
        <input>
          <soap:body use="literal" />
        </input>
        <output>
          <soap:body use="literal" />
        </output>
      </operation>
      <operation name="addNumbers">
        <soap:operation soapAction="http://example.com/addNumbers" />
        <input>
          <soap:body use="literal" />
        </input>
        <output>
          <soap:body use="literal" />
        </output>
      </operation>
    </binding>
    <service name="MyService">
      <port name="MyPort" binding="tns:MyBinding">
        <soap:address location="http://localhost:3000/wsdl" />
      </port>
    </service>
  </definitions>
`;

module.exports = { myService, xml };
