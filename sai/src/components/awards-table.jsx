'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const awards = [
  { name: "Filmfare Awards South", wins: 6, nominations: 7 },
  { name: "South Indian International Movie Awards", wins: 2, nominations: 7 },
  { name: "Ananda Vikatan Cinema Awards", wins: 1, nominations: 2 },
  { name: "Asianet Film Awards", wins: 2, nominations: 2 },
  { name: "Asiavision Awards", wins: 1, nominations: 1 },
  { name: "Chennai International Film Festival", wins: 1, nominations: 1 },
  { name: "CPC Cine Awards", wins: 1, nominations: 1 },
  { name: "Indian Film Festival of Melbourne", wins: 0, nominations: 1 },
  { name: "Norway Tamil Film Festival Awards", wins: 1, nominations: 1 },
  { name: "Vanitha Film Awards", wins: 1, nominations: 1 },
]

export function AwardsTableComponent() {
  const totalWins = awards.reduce((sum, award) => sum + award.wins, 0)
  const totalNominations = awards.reduce((sum, award) => sum + award.nominations, 0)
  return (
    (<div> 
    <div className="rounded-md border bg-blue-50">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Awards</TableHead>
            <TableHead className="text-center">Wins</TableHead>
            <TableHead className="text-center">Nominations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {awards.map((award) => (
            <TableRow key={award.name}>
              <TableCell className="font-medium">{award.name}</TableCell>
              <TableCell className="text-center bg-green-200">{award.wins}</TableCell>
              <TableCell className="text-center bg-pink-200">{award.nominations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

      <Table className='totalaward'>

       
      <TableBody className="bg-blue-100">
          <TableRow>
            <TableCell colSpan={3} className="font-bold text-lg">Totals</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wins</TableCell>
            <TableCell colSpan={2} className="text-center bg-green-200 font-bold">{totalWins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nominations</TableCell>
            <TableCell colSpan={2} className="text-center bg-pink-200 font-bold">{totalNominations}</TableCell>
          </TableRow>
        </TableBody>
        </Table>
    </div>)
  );
}