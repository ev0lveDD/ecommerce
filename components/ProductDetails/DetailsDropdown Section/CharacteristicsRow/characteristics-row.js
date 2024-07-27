export default function CharacteristicsRow({rowName, rowData}) {
    return(
        <div className="flex justify-between">
            <p className="text-gray-400 text-sm font-medium">{rowName}</p>
            <p className="text-sm font-medium">{rowData}</p>
        </div>
    );
}