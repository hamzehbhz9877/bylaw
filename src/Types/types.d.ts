
type Api<T> = {
    data: T
    isSuccess: boolean
    message?: string
}

type User = {
    userName: string
    firstName: string
    lastName: string
    email: string
    role: string
    updatedAt: string
    createdAt: string
    _id: string
}

type Authentication = {
    fullName: string
    role: string
    token: string
    refreshToken: string
}

type Login = {
    email: string
    password: string
}

type Register = {
    userName: string
    firstName: string
    lastName: string
    email: string
    password: string
    rePassword: string
}

type Questions = {
    title: {
        text: string,
        image?: string
    }
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: number
    selectedOption?: number
    createdAt?: string
    updatedAt?: string
    _id?: string
}

type ChangePassword = {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}

type UserManagement = {
    users: User[],
    pages: number
}

type QuestionManagement = {
    questions: Questions[],
    pages: number
}

type GetRandomQuestions = {
    questions: Questions[]
    _id: string
    remindTime: string
}

type postQuestion = {
    correctOption: {
        questionId: string | undefined
        optionSelected: number
    }[],
    testId: string
}

type TestResult = {
    numberOfCorrectAnswer: number | null
    numberOfWrongAnswer: number | null
    result: 0 | 1 | 2 | null
    _id?: string,
    createdAt?: string,
    fullName?: userName
}

type GeneralInfo = {
    numberOfAllTests: number
    numberOfAcceptedTests: number
    numberOfFailedTests: number
}

type AllUserTest = {
    tests: { result: number, fullName: string, createdAt?: string, _id: number }[]
    pages: number
}
