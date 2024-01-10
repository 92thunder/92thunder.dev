import styled from '@emotion/styled'
import { Card, Link, List, ListItem } from '@chakra-ui/react'
import { FC } from 'react'
import { getHeadings } from '../libs/getHeadings'

export const TableOfContents: FC<{ readonly markdown: string }> = ({
  markdown,
}) => {
  const headings = getHeadings(markdown)
  if (!headings.length) {return null}
  return (
    <StyledCard
      backgroundColor="#6B7280"
      borderColor="white"
      borderWidth="1px"
      color="white"
    >
      <nav>
        <List>
          {headings.map((heading) => (
            <ListItem key={heading.id}>
              <Link
                fontSize={12}
                href={`#${heading.id}`}
              >
                {heading.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  padding: 16px 0;
  min-width: 10rem;
  width: 100%;
  max-width: 25%;
  position: sticky;
  top: 2rem;
  height: min-content;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;

  @media (max-width: 640px) {
    display: none;
  }
`
