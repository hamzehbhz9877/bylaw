import useAlert from 'Context/alert/useAlert';
import { alert } from 'Context/alert';
import Alert from 'Components/alert/index';

const Notification = () => {
  const state = useAlert();

  if (state.alert.length === 0) {
    return null;
  }
  return (
      <div className="sweet-alert">
        {state.alert.map((alert: alert) => {
          return <Alert key={alert.id} {...alert} remove={state.removeAlert} />;
        })}
      </div>
  );
};

export default Notification;