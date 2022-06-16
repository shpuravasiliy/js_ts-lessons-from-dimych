const callbacknew = () => {
    alert('hey');
    return () => alert('yo');
}

// window.setTimeout(callbacknew(), 1000);

export const User = () => {
    const deleteUser = () => {
        alert('User have been deleted');
    }
    const saveUser = () => {
        alert('User have been saved');
    }
    const onNameChanged = () => {
        console.log('name changed');
    }
    const onBlurHandler = () => {
        console.log('focus lost');
    }
    const onFocusHandler = () => {
        console.log('focus find');
    }

    return (
        <div><textarea
            onChange={onNameChanged}
            onBlur={onBlurHandler}
        >Dimych</textarea>
            <input type="text" onFocus={onFocusHandler}/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}