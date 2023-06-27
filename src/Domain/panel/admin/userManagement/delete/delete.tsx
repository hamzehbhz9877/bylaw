import React, {FC} from 'react';
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {deleteUser} from "Services/shortlink";
import {queryClient} from "Store";
import MutationButton from "Components/button/mutation";

type Props= {
    id: any
    close: () => void
    name: string
}

const Delete= ({name, id, close}:Props) => {
    const {mutate} = useMutationQuery({
        event: deleteUser, options: {
            onSuccess: () => {
                queryClient.invalidateQueries('userManagement');
                close();
            },
        }
    });

    const handleDeleteUser = () => {
        mutate(id)
    }
    return (
        <div className="delete-user">
            <ModalHeader>
                <h4 className="text-center">حذف
                    کابر</h4>
            </ModalHeader>
            <ModalBody>
                <p>
                    ایا میخواهید کاربر {name} را حذف کنید؟
                </p>
            </ModalBody>
            <ModalFooter>
                <div className="text-center">
                    <MutationButton  type="submit" className="btn btn-success"
                                    onClick={handleDeleteUser}>
                        تایید
                    </MutationButton>
                </div>
            </ModalFooter>
        </div>
    );
};

export default Delete;