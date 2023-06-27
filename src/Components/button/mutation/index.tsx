import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import {useIsMutating} from "react-query";

type buttonType = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>, "children">

interface Props extends buttonType {
    children:string
}

const MutationButton= ({children, ...rest}:Props) => {
    const isMutating = useIsMutating();
    return (
        <button
            {...rest}
            className={`mutations ${rest.className}`}
            disabled={isMutating > 0}
        >
            {isMutating > 0 ? "..." : children}
        </button>
    );
};

MutationButton.defaultProps = {
    tag: "button",
};
export default MutationButton;