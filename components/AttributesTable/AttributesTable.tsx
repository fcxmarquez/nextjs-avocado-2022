import React from 'react'
import { Table } from 'semantic-ui-react'

type AttributesTableProps = {
  product: TProduct
}

export const AttributesTable: React.FC<AttributesTableProps> = ({
  product,
}) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Atrributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Shape</Table.Cell>
          <Table.Cell>{product.attributes.shape}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Hardiness</Table.Cell>
          <Table.Cell>{product.attributes.hardiness}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Taste</Table.Cell>
          <Table.Cell>{product.attributes.taste}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
