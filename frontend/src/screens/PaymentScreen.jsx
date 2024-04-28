import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3>
        <h1>Payment Method</h1>
        <Form>
            <Form.Group>
                
            </Form.Group>
        </Form>
      </CheckoutSteps>
    </FormContainer>
  );
};

export default PaymentScreen;
