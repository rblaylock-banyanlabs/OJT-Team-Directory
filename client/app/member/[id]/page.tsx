import { TeamMemberDetail } from "@/components/pages/team-member-detail"

export default async function MemberDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <TeamMemberDetail memberId={params.id} />
}