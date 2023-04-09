import ClassesTable from "./ClassesTable";
function Classes() {
  return (
    <div
      className="bg-dark text-white overflow-hidden"
      style={{ minWidth: "800px" }}
    >
      <ClassesTable />
    </div>
  );
}
export default Classes;
