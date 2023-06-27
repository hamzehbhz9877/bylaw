import React, {FC} from 'react';
import {useMutationQuery} from "Hooks/useMutationQuery";
import {deleteQuestion} from "Services/shortlink";
import {queryClient} from "Store";
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import MutationButton from "Components/button/mutation";

type Props= {
    id: string|undefined
    close: () => void
    name: { text: string, image: string }
}

const Delete= ({close, id, name}:Props) => {
    const {mutate} = useMutationQuery({
        event: deleteQuestion, options: {
            onSuccess: () => {
                queryClient.invalidateQueries('testManagement');
                close();
            },
        }
    });

    const handleDeleteUser = () => {
        mutate(id)
    }

    return (
        <div className="delete-question">
            <ModalHeader>
                <h4 className="text-center">حذف
                    سوال</h4>
            </ModalHeader>
            <ModalBody>
                <>
                    <p>{name.text}</p>
                    {name.image &&
                    <div className="text-center mx-auto questions__image-title">
                        <img className="h-100" src={name.image} alt=""/>
                    </div>
                    }
                </>
            </ModalBody>
            <ModalFooter>
                <div className="text-center">
                    <MutationButton  type="submit" className="btn btn-success" onClick={handleDeleteUser}>
                        تایید
                    </MutationButton>
                </div>
            </ModalFooter>
        </div>
    );
};

export default Delete;