type MessagesSchema = {
    [K in keyof typeof MessagesEnum]: string | ((...params: any) => string)
}

export default MessagesSchema