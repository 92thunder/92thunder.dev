import styled from '@emotion/styled'
import { Card, CardBody, Link, List, ListItem } from '@chakra-ui/react'
import { FC } from 'react'
import { getHeadings } from '../libs/getHeadings'

export const TableOfContents: FC<{ readonly markdown: string }> = ({
  markdown,
}) => {
  const headings = getHeadings(markdown)
  if (!headings.length) {return null}
  return (
    <StyledCard
      backgroundColor="#0A0A0B"
      borderColor="white"
      borderWidth="1px"
      color="white"
    >
      <CardBody py="0">
        <nav>
          <List>
            {headings.map((heading) => (
              <ListItem key={heading.id} my="2">
                <Link
                  fontSize={12}
                  href={`#${heading.id}`}
                  textDecoration="underline"
                >
                  {heading.text}
                </Link>
              </ListItem>
          ))}
          </List>
        </nav>
      </CardBody>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  padding: 16px 0;
  min-width: 200px;
  width: 100%;
  max-width: 25%;
  position: sticky;
  top: 2rem;
  height: min-content;
  max-height: calc(100vh - 24px);
  overflow-y: auto;

  @media (max-width: 640px) {
    display: none;
  }
`
