import moment, {Moment} from "moment";

export const validationRules = {
  required: (message: string = "Field is required") => ({
    required: true, message
  }),
  isDatePast: (message: string = "Date can't be past") => () => ({
    validator(_: any, value: Moment | null) {
      const currentDay = moment().format('YYYY-MM-DD')
      const chosenDay = value?.format('YYYY-MM-DD')
      if (value && moment(chosenDay).isSameOrAfter(currentDay)) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    }
  })
}
