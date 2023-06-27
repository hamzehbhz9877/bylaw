import { FC } from "react";
import { permission } from "Routes/premissions/route";
import Cookies from "universal-cookie";

interface Permissions {
  allowedPermissions: permission;
  children: any;
}

const checkPermissions = (
  userPermissions: permission,
  allowedPermissions: permission
) => {
  if (allowedPermissions.length === 0) {
    return true;
  }
  return userPermissions.some((permission) =>
    allowedPermissions.includes(permission)
  );
};

const AccessControl: FC<Permissions> = ({ allowedPermissions, children }) => {
  let permitted = null;
  const role = new Cookies().get("role");
  permitted = checkPermissions(role, allowedPermissions);

  if (permitted) {
    return children;
  } else return null;
};

export default AccessControl;
