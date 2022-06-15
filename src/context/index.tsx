import React, {
	FC,
	useMemo,
	ReactNode,
	useReducer,
	useContext,
	useCallback
} from 'react'

interface IState {
	fileCsv: File | string[] | null
	filePrn: File | string[] | null
	message: string 
	children?: ReactNode
}

export const initialState = {
	fileCsv: null,
	filePrn: null,
	message: 'NO FILE YET'
}

type IAction =
	| { type: 'SET_FILE_ACTION_CSV'; payload: File | null }
	| { type: 'SET_FILE_ACTION_PRN'; payload: File | null }
	| { type: 'SET_CORRECT_MESSAGE_ACTION'; payload: string }

type AppContextType = IState & {
	setFileCSVAction: (payload: File | string[] | null) => void
	setFilePRNAction: (payload: File | string[] | null) => void
	setCorrectMessageAction: (payload: String) => void
}

export const AppContext = React.createContext<IState | any>(initialState)

AppContext.displayName = 'AppContext'

function appReducer(state: IState, action: IAction) {
	switch (action.type) {
		case 'SET_FILE_ACTION_CSV': {
			return {
				...state,
				fileCsv: action.payload
			}
		}

		case 'SET_FILE_ACTION_PRN': {
			return {
				...state,
				filePrn: action.payload
			}
		}

		case 'SET_CORRECT_MESSAGE_ACTION': {
			return {
				...state,
				message: action.payload
			}
		}

		default:
			return state
	}
}

export const AppProvider: FC<IState> = props => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	const setFileCSVAction = useCallback(
		(payload: File | null) => {
			console.log(payload, 'from setFileCSVAction')
			return dispatch({ type: 'SET_FILE_ACTION_CSV', payload })
		},
		[dispatch]
	)

	const setFilePRNAction = useCallback(
		(payload: File | null) => dispatch({ type: 'SET_FILE_ACTION_PRN', payload }),
		[dispatch]
	)

	const setCorrectMessageAction = useCallback(
		(payload: string) =>
			dispatch({ type: 'SET_CORRECT_MESSAGE_ACTION', payload }),
		[dispatch]
	)

	const value = useMemo(
		() => ({
			...state,
			setFileCSVAction,
			setFilePRNAction,
			setCorrectMessageAction
		}),
		[state , setFileCSVAction,
			setFilePRNAction,
			setCorrectMessageAction]
	)

	return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => {
	const context = useContext<AppContextType>(AppContext)
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`)
	}
	return context
}

export const ManagedAppContext: FC<IState> = ({ children, ...props }) => (
	<AppProvider {...props}>{children}</AppProvider>
)
