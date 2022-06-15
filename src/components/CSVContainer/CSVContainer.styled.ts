import styled from 'styled-components'

export const CSVContainterStyle = styled.div`
	padding: 1rem 2rem;
	padding-bottom: 0;
	max-height: 97%;
	overflow-x: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
`

export const CSVTableStyle = styled.table`
	width: 100%;
	height: 100%;

	thead {
		tr {
			background-color: #e4e4e4;
			text-align: left;
			margin-right: 1rem;
			th {
				margin-right: 1rem;
			}
		}
	}

	tbody {
		tr {
			margin-right: 2rem;
			margin-bottom: 1rem;
			td {
				padding: 0.3rem 0.1rem;
				margin-bottom: 1rem;
				margin-right: 1rem;
			}
		}
	}
`
