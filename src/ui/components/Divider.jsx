export const Divider = ({marginY = 20}) => {
    console.log(marginY);
    return(
        <hr className={`my-${marginY}`} />
    )
}