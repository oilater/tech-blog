import { PortfolioConfig } from "../../../config";
import { Velog } from "../../velog/components/Velog";
import { useVelog } from "../../velog/hooks/use-velog";

export function Feed() {
    const { posts, isError } = useVelog({
        target: "posts",
        username: PortfolioConfig.velogId,
      });
    
      if (isError) {
        return <div>에러가 발생했어요 🥲</div>;
      }
    
      return (
        <div>
          <h1 style={{ marginBottom: '20px', fontSize: '32px' }}>Feed</h1>
          <Velog value={posts} />
        </div>
      );
}