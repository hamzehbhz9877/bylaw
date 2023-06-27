import Cookie from "universal-cookie";
import {intersection} from "Hooks/useLodash";
import React from "react";
import AccessDeny from "Domain/accessDeny/accessDeny";

export type permission = Array<string>;

export const isArrayWithLength = (arr: permission) => {
    return Array.isArray(arr) && arr.length;
};

export const getAllowedRoutes = (routes: Array<any>) => {
    const roles = new Cookie().get("role");
    return routes.map(({permission, ...rest}: { permission: permission }) => {
        if (!permission || !roles || !isArrayWithLength(permission)) {
            return rest;
        }
        if (intersection(permission, roles).length > 0) {
            return rest
        } else {
            return {
                ...rest,
                element: <AccessDeny/>
            }
        }
    });
};


