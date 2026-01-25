import { createRoute } from 'honox/factory';
import JoinForm from '../../islands/JoinForm';
import LotteryStatusDisplay from '../../islands/LotteryStatusDisplay';

export default createRoute((c) => {
  const roomId = c.req.param('roomId');

  return c.render(
    <div class="page-container">
      <div class="join-page">
        <JoinForm roomId={roomId} />
        <hr />
        <LotteryStatusDisplay roomId={roomId} />
      </div>
    </div>,
    {
      title: `Join Lottery - ${roomId}`,
    }
  );
});
