interface MessageProps {
    name: string;
}

export const Message = (props: MessageProps) => {
    return(
        <p>My name is {props.name}</p>
    );
}