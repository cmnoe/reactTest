function confirm(props) {
    return (
        new Promise((resolve, reject) => {
            if (window.confirm(props))
                resolve()
            else
                reject()
            //resolve(window.confirm(props))
        }).then(() => {return true}).catch(() => {return false})
    )
}

export default confirm