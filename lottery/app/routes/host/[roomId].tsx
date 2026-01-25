import { createRoute } from 'honox/factory';
import HostDashboard from '../../islands/HostDashboard';

export default createRoute((c) => {
  const roomId = c.req.param('roomId');

  return c.render(
    <div class="page-container">
      <div class="host-page">
        <HostDashboard roomId={roomId} />
      </div>
    </div>,
    {
      title: `Host Dashboard - ${roomId}`,
    }
  );
});
