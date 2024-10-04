import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetOrdersQuery, useDeliverOrderMutation, usePayOrderMutation } from '../../slices/ordersApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const OrderListScreen = () => {
  const navigate = useNavigate();

  const { data: orders, isLoading, error, refetch } = useGetOrdersQuery();

  const [deliverOrder, { isLoading: loadingDeliver }] = useDeliverOrderMutation();
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  // Handle mark as delivered
  const markAsDeliveredHandler = async (orderId) => {
    try {
      await deliverOrder(orderId).unwrap();
      toast.success('Order marked as delivered');
      refetch();  // Refetch orders to update the screen
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // Handle mark as paid
  const markAsPaidHandler = async (orderId) => {
    try {
      await payOrder({ orderId, details: {} }).unwrap();
      toast.success('Order marked as paid');
      refetch();  // Refetch orders to update the screen
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>UGX {order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <Button
                      variant='primary'
                      className='btn-sm'
                      onClick={() => markAsPaidHandler(order._id)}
                      disabled={loadingPay}
                    >
                      Mark as Paid
                    </Button>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <Button
                      variant='primary'
                      className='btn-sm'
                      onClick={() => markAsDeliveredHandler(order._id)}
                      disabled={loadingDeliver}
                    >
                      Mark as Delivered
                    </Button>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
