// Types (converted to JSDoc comments for documentation)

/**
 * @typedef {'PENDING' | 'COMPLETED' | 'FAILED'} PhonePeOrderState
 */

/**
 * @typedef {'PENDING' | 'COMPLETED' | 'FAILED'} PhonePePaymentState
 */

/**
 * @typedef {'UPI_INTENT' | 'UPI_COLLECT' | 'UPI_QR' | 'CARD' | 'NET_BANKING' | 'CREDIT_LINE'} PhonePePaymentMode
 */

/**
 * @typedef {'UPI' | 'PG' | 'PPI_WALLET'} PhonePeRailType
 */

/**
 * @typedef {'ACCOUNT' | 'WALLET' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'NET_BANKING' | 'CREDIT_LINE'} PhonePeInstrumentType
 */

/**
 * @typedef {Object} PhonePeMetaInfo
 * @property {string} [udf1]
 * @property {string} [udf2]
 * @property {string} [udf3]
 * @property {string} [udf4]
 * @property {string} [udf5]
 * @property {string} [udf6]
 * @property {string} [udf7]
 * @property {string} [udf8]
 * @property {string} [udf9]
 * @property {string} [udf10]
 * @property {string} [udf11]
 * @property {string} [udf12]
 * @property {string} [udf13]
 * @property {string} [udf14]
 * @property {string} [udf15]
 */

/**
 * @typedef {Object} PhonePeRail
 * @property {PhonePeRailType} type
 * @property {string} [utr]
 * @property {string} [upiTransactionId]
 * @property {string} [vpa]
 * @property {string} [authorizationCode]
 */

/**
 * @typedef {Object} PhonePeInstrument
 * @property {PhonePeInstrumentType} type
 * @property {string} [maskedAccountNumber]
 * @property {string} [unmaskedAccountNumber]
 * @property {string} [accountType]
 * @property {string} [accountHolderName]
 * @property {string} [bankId]
 * @property {string} [ifsc]
 * @property {string} [providerAccountType]
 * @property {string} [cardNetwork]
 * @property {string} [geoScope]
 * @property {string} [brn]
 * @property {string} [maskedCardNumber]
 */

/**
 * @typedef {Object} PhonePeSplitInstrument
 * @property {number} amount
 * @property {PhonePeInstrument} instrument
 * @property {PhonePeRail} rail
 */

/**
 * @typedef {Object} PhonePePaymentDetail
 * @property {string} transactionId
 * @property {PhonePePaymentMode} paymentMode
 * @property {number} timestamp
 * @property {number} amount
 * @property {number} [payableAmount]
 * @property {number} [feeAmount]
 * @property {string} [currency]
 * @property {string} [payableCurrency]
 * @property {string} [feeCurrency]
 * @property {PhonePePaymentState} state
 * @property {string} [errorCode]
 * @property {string} [detailedErrorCode]
 * @property {PhonePeRail} [rail]
 * @property {PhonePeInstrument} [instrument]
 * @property {PhonePeSplitInstrument[]} [splitInstruments]
 */

/**
 * @typedef {Object} PhonePeErrorContext
 * @property {string} errorCode
 * @property {string} detailedErrorCode
 * @property {string} source
 * @property {string} stage
 * @property {string} description
 */

/**
 * @typedef {Object} PhonePePaymentFlow
 * @property {string} type
 */

/**
 * @typedef {Object} PhonePeOrderStatusSuccess
 * @property {string} [merchantId]
 * @property {string} [merchantOrderId]
 * @property {string} orderId
 * @property {PhonePeOrderState} state
 * @property {number} amount
 * @property {string} [currency]
 * @property {number} [payableAmount]
 * @property {string} [payableCurrency]
 * @property {number} [feeAmount]
 * @property {string} [feeCurrency]
 * @property {number} [discountAmount]
 * @property {number} expireAt
 * @property {PhonePePaymentDetail[]} paymentDetails
 * @property {PhonePeMetaInfo} [metaInfo]
 * @property {string} [errorCode]
 * @property {string} [detailedErrorCode]
 * @property {PhonePeErrorContext} [errorContext]
 * @property {PhonePePaymentFlow} [paymentFlow]
 */

/**
 * @typedef {Object} PhonePeOrderStatusError
 * @property {string} code
 * @property {string} message
 */

/**
 * @typedef {PhonePeOrderStatusSuccess | PhonePeOrderStatusError} PhonePeOrderStatusResponse
 */

// Helper functions

/**
 * Check if the response is an error response
 * @param {PhonePeOrderStatusResponse} response
 * @returns {response is PhonePeOrderStatusError}
 */
const isErrorResponse = (response) => {
    return 'code' in response && 'message' in response;
};

/**
 * Check if payment is completed
 * @param {PhonePeOrderStatusSuccess} response
 * @returns {boolean}
 */
const isPaymentCompleted = (response) => response.state === 'COMPLETED';

/**
 * Check if payment failed
 * @param {PhonePeOrderStatusSuccess} response
 * @returns {boolean}
 */
const isPaymentFailed = (response) => response.state === 'FAILED';

/**
 * Check if payment is pending
 * @param {PhonePeOrderStatusSuccess} response
 * @returns {boolean}
 */
const isPaymentPending = (response) => response.state === 'PENDING';

// Export the helpers
export const phonePeHelpers = {
    isErrorResponse,
    isPaymentCompleted,
    isPaymentFailed,
    isPaymentPending,
};