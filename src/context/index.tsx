import React, {
	FC,
	useMemo,
	ReactNode,
	useReducer,
	useContext,
	useCallback,
} from 'react'

interface IState {
	fileCsv: File | null
	filePrn: File | null
	children?: ReactNode
}

const initialState = {
	fileCsv: null,
	filePrn: null
}

type IAction =
	| { type: 'SET_FILE_ACTION_CSV'; payload: File }
	| { type: 'SET_FILE_ACTION_PRN'; payload: File }

type AppContextType = IState & {
	setFileCSVAction: (payload: File) => void
		setFilePRNAction: (payload: File) => void
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

		default:
			return state
	}
}

export const AppProvider: FC<IState> = props => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	const setFileCSVAction = useCallback(
		(payload: any) => dispatch({ type: 'SET_FILE_ACTION_CSV', payload }),
		[dispatch]
	)

	const setFilePRNAction = useCallback(
		(payload: any) => dispatch({ type: 'SET_FILE_ACTION_PRN', payload }),
		[dispatch]
	)

	const value = useMemo(
		() => ({
			...state,
			setFileCSVAction,
			setFilePRNAction
		}),
		[state]
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

export const ManagedAppContext: FC<IState> = ({  children, ...props }) => (
	<AppProvider {...props}>{children}</AppProvider>
)
