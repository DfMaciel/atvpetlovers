export default class Formatacoes {
    constructor() {

    }
    public DataString(data: Date): string {
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }
    public StringData(data: string): Date {
        let dataSplit = data.split('/')
        return new Date(parseInt(dataSplit[2]), parseInt(dataSplit[1])-1, parseInt(dataSplit[0]))
    }
}